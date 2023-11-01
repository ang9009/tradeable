import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, updateMetadata, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TextArea from "../../components/form/TextArea/TextArea";
import TextInput from "../../components/form/TextInput/TextInput";
import Button from "../../components/ui/Button/Button";
import { useUser } from "../../context/UserContext";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import { db, storage } from "../../lib/firebase";
import checkImage from "../../utils/checkImage";
import AccountSettingsCSS from "./AccountSettings.module.css";

function AccountSettings() {
  const navigate = useNavigate();
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const [userPhoto, setUserPhoto] = useState(
    require("../../assets/profile_placeholder.png")
  );
  const [photoFile, setPhotoFile] = useState(null);
  const { user } = useUser();
  const [currUser, setCurrUser] = useState({});
  useEffect(() => {
    const userPhotoUrl = `https://storage.googleapis.com/tradeable-6ed31.appspot.com/profileImages/${user.id}`;

    checkImage(userPhotoUrl).then((userPhotoExists) => {
      if (userPhotoExists) {
        setUserPhoto(userPhotoUrl);
      }
    });

    const userRef = doc(db, "users", user?.id);
    getDoc(userRef).then((res) => {
      setCurrUser(res.data());
    });
  }, []);

  // Submission function
  async function handleSubmitAccountSettings(data, e) {
    e.preventDefault();

    if (photoFile) {
      // Upload file + metadata
      const photoRef = ref(storage, `profileImages/${user.id}`);
      const photoMetadata = {
        cacheControl: "public,max-age=15,no-store",
        contentType: "image/jpeg",
      };
      await uploadBytes(photoRef, photoFile);
      await updateMetadata(photoRef, photoMetadata);

      // Update user object
      await updateDoc(doc(db, "users", user.id), {
        photoUrl: `https://storage.googleapis.com/tradeable-6ed31.appspot.com/profileImages${user.id}`,
      });
    }

    await updateDoc(doc(db, "users", user.id), {
      about: data.about,
    });

    navigate(`/profile/${user.id}/listings`);
    toast.success("Profile updated", { autoClose: 3000 });
  }

  return (
    <PageContainer type={"centered"}>
      <form onSubmit={handleSubmit(handleSubmitAccountSettings)}>
        <h1 className="page-title">Account settings</h1>
        <div className={"page-section-container"}>
          <div className="subtitle">Edit profile</div>
          <div
            className={`form-section-container ${AccountSettingsCSS["form-section"]}`}
          >
            <div className={AccountSettingsCSS["username-and-email"]}>
              <TextInput
                options={{
                  label: "Username",
                  placeholder: "Username",
                  isDisabled: true,
                  defaultValue: user?.name,
                  notRequired: true,
                }}
                formData={{ register, errors }}
              />
              <TextInput
                options={{
                  label: "Email",
                  placeholder: "Email",
                  isDisabled: true,
                  defaultValue: user?.email,
                  notRequired: true,
                }}
                formData={{ register, errors }}
              />
            </div>
            <TextArea
              options={{
                label: "About",
                max: 300,
                min: 20,
                placeholder: "Tell us about yourself (but not too much)...",
                defaultValue: currUser?.about,
              }}
              formData={{ register, errors }}
            />
            <div className={`input-field-container`}>
              <label className={"input-label"} htmlFor={"user-photo"}>
                Profile picture
              </label>
              <div className={AccountSettingsCSS["user-photo-input"]}>
                <img
                  src={userPhoto}
                  alt=""
                  className={AccountSettingsCSS["user-photo"]}
                />
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  style={{ display: "none" }}
                  id="file"
                  onInput={async (e) => {
                    // Image input doesn't allow the same img to be uploaded again by default, so use onInput
                    if (e.target.files[0] && e.target.files[0].size > 4194304) {
                      toast.error("Please upload files that are under 4MB", {
                        theme: "colored",
                        autoClose: 3000,
                      });
                    } else if (e.target.files[0]) {
                      setUserPhoto(URL.createObjectURL(e.target.files[0]));
                      setPhotoFile(e.target.files[0]);
                    }
                  }}
                />
                <label htmlFor="file">
                  <h1 className={AccountSettingsCSS["upload-photo-btn"]}>
                    Upload photo
                  </h1>
                </label>
              </div>
              <Button
                options={{
                  type: "black-filled",
                  text: "Submit",
                  className: AccountSettingsCSS["submit-btn"],
                }}
              />
            </div>
          </div>
        </div>
      </form>
    </PageContainer>
  );
}

export default AccountSettings;

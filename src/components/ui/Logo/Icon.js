function Icon({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      fill="none"
      version="1.1"
      viewBox="0 0 31 31"
    >
      <g fill={color} clipPath="url(#clip0_1302_12)">
        <path
          fillOpacity="1"
          strokeWidth="0.946"
          d="M15.563.877c-.347 0-.695.065-1.024.197L1.472 6.303a.914.914 0 00-.575.85v15.88a1.83 1.83 0 001.155 1.7l13.17 5.27c.22.087.463.087.683 0l13.173-5.27a1.834 1.834 0 001.155-1.7V7.153a.916.916 0 00-.576-.85l-13.07-5.229a2.745 2.745 0 00-1.024-.197zm0 1.835c.116 0 .232.022.342.066l4.066 1.625L8.688 8.916 4.281 7.153l10.94-4.375a.922.922 0 01.342-.066zm6.875 2.681l4.408 1.76-11.283 4.509-4.407-1.76zm5.958 3.116v14.52L16.48 27.796v-14.52z"
          color={color}
        ></path>
        <path
          d="M24.337 20.56c-.162.071-.397.234-.56.306-.323.143-.47-.013-.47-.44v-3.902l.972-.43c.485-.214.78-.654.78-1.095 0-.457-.295-.636-.78-.421l-.972.429v-1.001c0-.53-.427-.784-.958-.55-.53.235-.971.872-.971 1.402v1.001l-.427.189c-.472.208-.78.654-.78 1.11 0 .442.308.615.78.407l.427-.189v3.843c0 2.047 1.016 1.922 2.017 1.48 1.001-.442 1.664-1.089 1.664-1.766 0-.456-.28-.598-.722-.373z"
          style={{}}
          strokeWidth="13.838"
          fontFamily="Visby Round CF"
          fontSize="15.415"
          fontWeight="bold"
          color={color}
        ></path>
      </g>
      <defs id="defs11">
        <clipPath id="clip0_1302_12">
          <path id="rect8" fill="#fff" d="M0 0H31V31H0z" color={color}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;

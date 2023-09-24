import khoury.*;

// -----------------------------------------------------------------
// Homework 2, Problem 1
// -----------------------------------------------------------------

// TODO 1/1: Design the predicate startsWithY that determines if
//           the supplied string starts with the letter "y"
//           (either upper or lowercase).
//
//           Hints:
//            - The string.startsWith(prefix) function will help
//              evaluate the prefix (even if the string is too
//              short).
//            - The string.lowercase/uppercase() functions help
//              you not worry about case.
//            - Remember that "designing" a function means to
//              document and test it!
//

// Determines if the supplied string starts with the letter "y"
fun startsWithY(str: String): Boolean {
    return str.lowercase().startsWith("y");
}

@EnabledTest
fun testStartsWithY() {
    // Should have both uppercase and lowercase y, and one that doesn't have y
    testSame(startsWithY("no"), false, "Should be false");
    testSame(startsWithY("Yes"), true, "Should be true");
    testSame(startsWithY("yes"), true, "Should be true");
}

fun main() {
}

runEnabledTests(this);

main();
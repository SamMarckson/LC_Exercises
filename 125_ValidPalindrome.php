<?php

class Solution {

  /**
   * @param String $s
   * @return Boolean
   */
  function isPalindrome($s) {
    $s = preg_replace("/[^a-zA-Z0-9]/", "", strtolower($s));
    for ($i = 0; $i < floor(strlen($s) / 2); $i++) {
      if ($s[$i] !== $s[strlen($s) - ($i + 1)]) {
        return false;
      }
    }
    return true;
  }
}

$response = new Solution();
echo $response->isPalindrome("A man, a plan, a canal: Panama");

?>
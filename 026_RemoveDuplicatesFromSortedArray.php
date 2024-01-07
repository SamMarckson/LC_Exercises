<!-- https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/ -->
<?php
class Solution {
  function removeDuplicates(&$nums) {
      for($i = 1; $i < count($nums); $i++) {
        if($nums[$i] === $nums[$i - 1]) {
          unset($nums[$i]);
          $nums = array_values($nums); 
          $i--;
        }
      }
      return count($nums);
  }
}
?>

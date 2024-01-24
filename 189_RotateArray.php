<?php 
#Source: https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150

class Solution {

  /**
   * @param Integer[] $nums
   * @param Integer $k
   * @return NULL
   */

  function numsReverse(&$array, $start, $end) {
    while ($start < $end) {
      [$array[$start], $array[$end]] = [$array[$end], $array[$start]];
      $start++;
      $end--;
    }
  }

  function rotate(&$nums, $k) {
    $k = $k % count($nums);
    $nums = array_reverse($nums);

    $this->numsReverse($nums, 0, $k - 1);
    $this->numsReverse($nums, $k, count($nums) - 1);
  }
}

?>
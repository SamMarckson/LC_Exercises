<?php 

// Source: https://leetcode.com/problems/insert-interval/description/

class Solution {

  /**
   * @param Integer[][] $intervals
   * @param Integer[] $newInterval
   * @return Integer[][]
   */
  function insert($intervals, $newInterval) {
      [$firstComparative, $lastComparative] = $newInterval;
      $leftArray = [];
      $rightArray = [];

      foreach ($intervals as $array) {
        [$firstElement, $secondElement] = $array;

        if ($firstElement > $lastComparative) {
          array_push($rightArray, $array);
        }

        else if ($secondElement < $firstComparative) {
          array_push($leftArray, $array);
        }

        else {
          $firstComparative = min($firstElement, $firstComparative);
          $lastComparative = max($secondElement, $lastComparative);
        }
      }

      return [...$leftArray, [$firstComparative, $lastComparative], ...$rightArray];
  }
}

// $response = new Solution();
// print_r($response->insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
?>
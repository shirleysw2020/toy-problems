/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node
* at which the intersection of two linked lists begins,
* or null if there is no such intersection.
*
* Example:
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return D
* as the node of intersection.
*
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return NULL
* as there is no point of intersection.
*
*    A → B → C → D
*    X → Y → Z
*
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

function linkedListIntersection(headA, headB) {
  // TODO: Implement this function!
  if (headA == null || headB == null) {return null;}

  ListNode tempA = headA;
  ListNode tempB = headB;

  var lengthA = 0, lengthB = 0;
  //iterate over till tempA.next != null and find lengthA
  while (tempA.next != null) {
    lengthA++;
    tempA = tempA.next;
  }

  //iterate over till tempB.next != null and find lengthB
  while (tempB.next != null) {
    lengthB++;
    tempB = tempB.next;
  }
  // if a and b don't have same length. aka not ending at same node , this means no intersection!
  if(tempA != tempB) {return null;}

  //declare diff variable to be 0
  var diff = 0;
  if (lengthA > lengthB) {
    tempA = headA;
    tempB = headB;
    diff = lengthA - lengthB;
  } else {
    tempA = headB;
    tempB = headA;
    diff = lengthB - lengthA;
  }

  while (diff > 0) {
      tempA = tempA.next;
      diff--;
  }

  while (tempA != tempB) {
      tempA = tempA.next;
      tempB = tempB.next;
  }
  return tempA;
}


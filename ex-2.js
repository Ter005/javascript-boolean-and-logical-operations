// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;
let hasPromotion;

lastMonthPaidMoreThan4000 = 4000
isWeekday = 'Monday'||'Tuesday'||'Wenesday'||'Thursday'||'Friday'
hasBoughtProductFromITCategory = 'IT'
hasAttendedDiscountEvent > 0
isPlatinum = 'Platinum'


// case 1
hasPromotion = (lastMonthPaidMoreThan4000 > 4000)&&(isWeekday=true)&&!hasBoughtProductFromITCategory&& hasAttendedDiscountEvent==0
console.log(hasPromotion);
// casd 2
hasPromotion = isPlatinum =='Platinum'
console.log(hasPromotion);

// John
hasPromotion = lastMonthPaidMoreThan4000 == 4001&& isWeekday == 'Friday' && !hasBoughtProductFromITCategory && hasAttendedDiscountEvent ==2 && isPlatinum =='Gold'
console.log(hasPromotion);


// Reassign as John
lastMonthPaidMoreThan4000 =4001
isWeekday = 'Friday'
hasBoughtProductFromITCategory = 'IT'
hasAttendedDiscountEvent = 2
isPlatinum = 'Gold'

// John after reassign
hasPromotion = lastMonthPaidMoreThan4000 == 4001&& isWeekday == 'Friday' && !hasBoughtProductFromITCategory && hasAttendedDiscountEvent ==2 && isPlatinum =='Gold'
console.log(hasPromotion);

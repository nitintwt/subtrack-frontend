export const  calculateRenewalDate =(lastRenewalDate: any, frequency: string):Date => {
  let nextRenewalDate = new Date(lastRenewalDate)

  while (nextRenewalDate <= new Date()) {
    if (frequency === "monthly") {
      nextRenewalDate.setMonth(nextRenewalDate.getMonth() + 1);
    } else if (frequency === "yearly") {
      nextRenewalDate.setFullYear(nextRenewalDate.getFullYear() + 1);
    } else {
      throw new Error("Unsupported frequency");
    }
  }
  return nextRenewalDate;
}

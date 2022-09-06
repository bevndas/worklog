export interface Leave {
    leaveType:string;
    icon: string;
    availableDays?: number;
    takenDays?: number;
    scheduledDays?: number;
    statistic?: number;
}
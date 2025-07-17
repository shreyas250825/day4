enum Role {
  Doctor = "Doctor",
  Nurse = "Nurse",
  Admin = "Admin"
}

interface Staff {
  id: number;
  name: string;
  role: Role;
}

const staffList: Staff[] = [
  { id: 1, name: "Dr. Smith", role: Role.Doctor },
  { id: 2, name: "Nina", role: Role.Nurse },
  { id: 3, name: "John", role: Role.Admin }
];

function printStaffSummary(staffs: Staff[]): void {
  for (const staff of staffs) {
    console.log(`${staff.name} is a ${staff.role}`);
  }
}

printStaffSummary(staffList);

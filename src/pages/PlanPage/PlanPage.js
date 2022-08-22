import Table from '../../components/Table/Table';

export default function PlanPage() {
  const headers = ['', 'Free', 'Pro','Enterprise'];
  const tableData = [
    { type: 'Public', free: 'yes', pro: 'yes', enterprise: 'yes' },
    { type: 'Private', free: 'no', pro: 'yes', enterprise: 'yes' },
    { type: 'Permissions', free: 'yes', pro: 'yes', enterprise: 'yes' },
    { type: 'Sharing', free: 'no', pro: 'yes', enterprise: 'yes' },
    { type: 'Unlimited members', free: 'no', pro: 'yes', enterprise: 'yes' },
    { type: 'Extra security', free: 'no', pro: 'no', enterprise: 'yes' },
  ];
  return (
    <div className="container">
      <h1>Compare plans</h1>
      <Table bodyData={tableData} headers={headers}></Table>
    </div>
  );
}

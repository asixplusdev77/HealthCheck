import List from "@/components/List";

const repos = [
  {
    id: 1,
    href: "/repo/status",
    title: "susan / ios-app",
    status: "success",
    extra: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
  },
  {
    id: 2,
    href: "/repo/status",
    title: "fred / ios-app",
    status: "warning",
    extra: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
  },
  {
    id: 3,
    href: "/repo/status",
    title: "bob / ios-app",
    status: "error",
    extra: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
  },
];

export default function Page() {
  return (
    <>
      <h1>List</h1>
      <List data={repos} />
    </>
  );
}

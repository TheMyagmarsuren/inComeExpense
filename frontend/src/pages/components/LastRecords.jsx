import Records from "./Records";
export const LastRecords = () => {
  return (
    <div className="bg-white rounded-2xl">
      <div className="p-6 border-b border-grey-500">Last Records</div>
      <div className="px-6">
        <Records />
        <Records />
        <Records />
        <Records />
        <Records />
      </div>
    </div>
  );
};
export default LastRecords;

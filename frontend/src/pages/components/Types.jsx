export default function Types() {
  return (
    <div className="form-control">
      <label className="label cursor-pointer flex gap-2 justify-start">
        <input
          type="radio"
          name="radio-10"
          className="radio checked:bg-red-500"
          checked
        />
        <span className="label-text">All</span>
      </label>
    </div>
  );
}

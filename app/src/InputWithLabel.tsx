export type InputWithLabelProps = {
  label: string;
};
export function InputWithLabel({ label }: InputWithLabelProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "0.5rem",
      }}
    >
      <span style={{ marginRight: "0.5rem" }}>{label}</span>
      <input type="text" />
    </div>
  );
}

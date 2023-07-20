export const ResetApp = () => {
  const onReset = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <h1>ResetApp</h1>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

// eslint-disable-next-line no-unused-vars
export const ButtonGroup = ({ ButtonComponent, numbers, count, setCount }) => {
  return (
    <div>
      {numbers.map((num) => (
        <ButtonComponent
          key={num}
          num={num}
          count={count}
          setCount={setCount}
        />
      ))}
    </div>
  );
};

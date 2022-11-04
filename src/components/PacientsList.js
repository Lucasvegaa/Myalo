
export const PacientsList = ({users}) => {
  return (
    <>
      {users && users?.map((user) => (
        <div key={user.id}>
          {user.nombre} {user.id}
        </div>
      ))}
    </>
  );
}

export default PacientsList;

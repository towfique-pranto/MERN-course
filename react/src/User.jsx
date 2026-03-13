export default function User({ user }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={user.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {user.firstName} {user.lastName}
        </h2>
        <p>Email: {user.email}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Select</button>
        </div>
      </div>
    </div>
  );
}

import Navbar from "../components/navbar"
export default function Contact() {
    return (
      <div>
              <Navbar/>

       <div className="hero bg-base-200 h-[500px]">
  <div className="hero-content flex-col lg:flex-row-reverse lg:gap-[120px]">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login to Your Garden!</h1>
      <p className="py-6">
      Login to your plant profile and discover a world of green possibilities.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
      </div>
    );
  }
  
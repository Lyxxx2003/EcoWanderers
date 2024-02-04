import Link from "next/link";

const Button = () => {
    return (
      <button className="h-12 rounded-lg bg-white font-bold px-5"><Link href="/signin">
      Sign In
    </Link></button>
    );
  };
  export default Button;
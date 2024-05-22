import Link from "next/link";
import React from "react";

import { UserButton, auth } from "@clerk/nextjs";



const UserAccountNav = () => {

  const { userId } = auth();
  const isAuth = !!userId;

  return (
    <>
      {
        !isAuth && (
          <Link href="/sign-in">
            <button>
              LOGIN
            </button>
          </Link>
        )
      }
      {
        isAuth && (
          <UserButton afterSignOutUrl="/" />
        )
      }

    </>

  )
};

export default UserAccountNav;

import React, { useEffect, useState } from 'react';
import Header from './_components/Header';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { UserDetailContext } from '@/context/UserDetailContext';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const createUserMutation = useMutation(api.User.CreateNewUser);
  const [userDetail, setUserDetail] = useState<any>();
  const { user } = useUser();

  const createNewUser = async () => {
    if (user) {
      const result = await createUserMutation({
        email: user?.primaryEmailAddress?.emailAddress ?? '',
        name: user?.fullName ?? '',
        imageURL: user?.imageUrl ?? ''
      });
      setUserDetail(result);
    }
  };

  useEffect(() => {
    if (user) {
      createNewUser();
    }
  }, [user]);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>
        <Header />
        {children}
      </div>
    </UserDetailContext.Provider>
  );
}

export default Provider;

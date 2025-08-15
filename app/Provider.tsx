import React, { useEffect } from 'react';
import Header from './_components/Header';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const createUserMutation = useMutation(api.User.CreateNewUser);
  const { user } = useUser();

  useEffect(() => {
    user && createNewUser();
  }, [user]);

  const createNewUser = async () => {
    if (user) {
      await createUserMutation({
        email: user?.primaryEmailAddress?.emailAddress ?? '',
        name: user?.fullName ?? '',
        imageURL: user?.imageUrl ?? ''
      });
    }
  };



  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Provider;

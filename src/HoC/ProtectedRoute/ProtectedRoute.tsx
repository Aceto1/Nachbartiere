import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Spinner } from '@chakra-ui/react'
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute: React.FC = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading)
    return <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
      top='50%'
      left='50%'
      transform='translate(-50%, -50%)'
      position='fixed'
    />

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" />;
};
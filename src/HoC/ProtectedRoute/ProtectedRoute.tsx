import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType } from "react";
import { Spinner } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  component: ComponentType;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component,
}) => {
  const { isLoading, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  if (isLoading)
    return <Spinner />

  if (!isAuthenticated) {
    navigate("/login");
    return <Spinner />
  }

  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Spinner />,
  });

  return <Component />;
};
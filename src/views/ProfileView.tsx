import React from "react";
import ProfileCard, { User } from "../components/Authentication/ProfileCard";
import Container from "../shared/Container";
import withPermission from "../utils/HOC/withPermission";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import Header from "../components/Header";

declare interface ProfileViewProps {
  user: User;
}

const ProfileView: React.FC<ProfileViewProps> = (props) => {
  const auth = useSelector((state: RootState) => ({
    profile: state.authentication.profile,
  }));

  return (
    <>
      <Header title="AlgaStock" />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ProfileCard
            user={{
              email: auth.profile?.email || "",
              name: auth.profile?.user || "",
            }}
          />
        </div>
      </Container>
    </>
  );
};

export default withPermission(["admin", "customer"], "/")(ProfileView);

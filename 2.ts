type Profile = {
  username: string;
  bio: string | null;
  avatarUrl?: string;
};

const profile1: Profile = {
  username: "user1",
  bio: null
};

const profile2: Profile = {
  username: "user2",
  bio: "Love coding.",
  avatarUrl: "https://avatar.com/u2"
};

function showProfile(profile: Profile): void {
  console.log(`Username: ${profile.username}`);
  console.log(`Bio: ${profile.bio ?? "No bio available."}`);
  console.log(`Avatar: ${profile.avatarUrl ?? "Default avatar used."}`);
}

showProfile(profile1);
showProfile(profile2);

export interface Tweet {
  id: string;
  text: string;
  created_at: string;
  user_id: string;
}

export interface TweetWithProfile extends Tweet {
  profiles: {
    full_name: string;
    username: string;
    avatar_url: string | null;
  };
}

export interface TweetResponse {
  data: TweetWithProfile[];
  error: Error | null;
}

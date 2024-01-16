CREATE EXTENSION IF NOT EXISTS "vector" SCHEMA extensions;

-- Create a table for public profiles
create table profile (
  id uuid references auth.users not null primary key,

  full_name text not null,
  avatar_url text not null,
  
  superuser boolean default false not null,

  updated_at timestamp with time zone,
  created_at timestamp with time zone
);

alter table profile
  enable row level security;

create table conversation (
  id uuid not null primary key,
  
  title text not null,
  summary text not null,

  creator uuid references auth.users not null,
  
  embeddings vector(384),

  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone,

  deleted_at timestamp with time zone,
  archived_at timestamp with time zone
);

alter table conversation
  enable row level security;

create table message (
  id uuid not null primary key,
  
  content text not null,
  conversation uuid references public.conversation not null,

  is_system_message boolean default false not null,

  embeddings vector(384),

  updated_at timestamp with time zone,
  created_at timestamp with time zone default now() not null
);

alter table message
  enable row level security;


create function public.register_user()
returns trigger as $$
begin
  insert into public.profile (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.register_user();

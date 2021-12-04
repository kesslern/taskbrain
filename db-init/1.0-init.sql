create table if not exists tasks (
  id serial,
  name text not null,
  description text,
  repeat_interval integer,
  created_at timestamp not null default (now() at time zone 'utc'),
  updated_at timestamp not null default (now() at time zone 'utc'),
  deleted boolean not null default false
);

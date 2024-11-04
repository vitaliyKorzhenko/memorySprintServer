CREATE TABLE users(
    id SERIAL NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    email varchar,
    phone varchar,
    age varchar,
    "isActive" boolean,
    info text,
    points integer DEFAULT 0,
    nickname varchar DEFAULT ''::character varying,
    PRIMARY KEY(id)
);

CREATE TABLE levels(
    id SERIAL NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    "type" varchar,
    mode varchar,
    options json,
    hint text,
    "isActive" boolean,
    answer numeric,
    "data" json,
    number numeric,
    "ageType" smallint DEFAULT '1'::smallint,
    PRIMARY KEY(id)
);
COMMENT ON TABLE levels IS 'table for levels';



CREATE TABLE level_progress(
    id SERIAL NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    point numeric DEFAULT '0'::numeric,
    status varchar DEFAULT 'active'::character varying,
    attempts numeric DEFAULT '0'::numeric,
    "isActive" boolean DEFAULT true,
    level_id bigint,
    user_id bigint,
    PRIMARY KEY(id),
    CONSTRAINT level_progress_level_id_fkey FOREIGN key(level_id) REFERENCES levels(id),
    CONSTRAINT level_progress_level_id_fkey1 FOREIGN key(level_id) REFERENCES levels(id),
    CONSTRAINT level_progress_user_id_fkey FOREIGN key(user_id) REFERENCES users(id)
);
COMMENT ON TABLE level_progress IS 'level progress (table)';

CREATE TYPE rating AS ENUM (
    '1',
    '2',
    '3',
    '4',
    '5'
);
CREATE TABLE feedback(
    id SERIAL NOT NULL,
    text text,
    userId integer,
    rate rating,
    create_time timestamp with time zone NOT NULL DEFAULT now(),
    PRIMARY KEY(id),
    CONSTRAINT feedback_userid_fkey FOREIGN key(userid) REFERENCES users(id)
);


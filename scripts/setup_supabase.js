import pg from 'pg';
const { Client } = pg;

const client = new Client({
  connectionString: 'postgresql://postgres:ZhEjyOVcoMSRJTXy@db.mdwylezviqvrexufoizv.supabase.co:5432/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  await client.connect();
  console.log('Connected to Supabase Postgres!');
  
  await client.query(`
    create table if not exists public.vedsweb_store (
      id text primary key,
      data jsonb not null,
      updated_at timestamp with time zone default timezone('utc'::text, now()) not null
    );
  `);
  console.log('Table vedsweb_store created successfully!');

  await client.query(`alter table public.vedsweb_store enable row level security;`);
  
  await client.query(`
    drop policy if exists "Allow public read" on public.vedsweb_store;
    create policy "Allow public read" on public.vedsweb_store for select using (true);

    drop policy if exists "Allow public insert" on public.vedsweb_store;
    create policy "Allow public insert" on public.vedsweb_store for insert with check (true);

    drop policy if exists "Allow public update" on public.vedsweb_store;
    create policy "Allow public update" on public.vedsweb_store for update using (true);
  `);
  console.log('Policies created successfully!');

  await client.end();
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});

create table if not exists achats (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  prenom text,
  nom text,
  produit_id text,
  produit_nom text,
  statut text default 'complete',
  created_at timestamptz default now()
);

alter table achats enable row level security;

create policy "Aucun accès public en lecture"
on achats for select
using (false);
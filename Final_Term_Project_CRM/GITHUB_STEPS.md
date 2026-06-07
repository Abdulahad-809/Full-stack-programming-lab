# GitHub Submission Steps

Do not push automatically from Codex. Follow these steps manually when you are ready.

## Repository Rules

- Repository name must be: `Full-Stack-Programming-Lab`
- Project folder inside repo must be: `Final_Term_Project_CRM`
- Do not commit `server/.env`.
- Do not commit `client/.env.local`.

## Commands

1. Open terminal in the parent folder or repository folder.

2. Check status:

```bash
git status
```

3. Add files:

```bash
git add .
```

4. Commit:

```bash
git commit -m "Final term CRM project"
```

5. Push:

```bash
git push origin main
```

If your branch is `master`, use:

```bash
git push origin master
```

## Add Lecturer As Collaborator

Invite:

[sharifali.aulecturer@gmail.com](mailto:sharifali.aulecturer@gmail.com)

## Final Safety Check

Before pushing, run:

```bash
git status
```

Make sure `.env` and `.env.local` are not listed as staged files.

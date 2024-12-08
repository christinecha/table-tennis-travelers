### Contribute New Clubs

Anyone is welcome to fill out this form: https://docs.google.com/forms/d/e/1FAIpQLSeTJTjAsNtvEMxTIZSToKbP02_uVKKv-EOR0uMIazdMg6xPTQ/viewform

### Add new clubs to the repo & publish

1. From this directory, run `yarn run form-to-clubs` in your terminal to automatically download the form response data.
2. Copy and paste the generated objects into the corresponding file in `/data/tt-clubs`.

- If there's no corresponding country/state/province file yet, create one and import it as needed into the `index.js` file in its directory.
- Double check that this club doesn't exist already! You can just run some simple searches in the repo.
- You need to add a unique `id` field to each new club. This should be some human-readable identifier, like `nyttc-flushing`.

3. Fix the formatting; form responses aren't perfect. (Links need to have `http` or `https`, double-check the image links so they work, capitalize things, etc.)
4. Once you save your work, check your local instance of the site to make sure it shows up correctly.
5. Important! Once you're done, mark the "Added?" field in the [form response spreadsheet](https://docs.google.com/spreadsheets/d/1-c-pqPnBOsGpECs5SmvYUksO6xvlbgIb1CK-jAmLCeA/edit?resourcekey=null#gid=1062528263) with an X so we don't duplicate this effort next time.

### Submit a PR

Once you've added new clubs to the repo (or made any other changes), please submit a PR for approval.

- Create a new branch (naming convention: <you>/<description>, like cha/new-clubs)
- Commit & push to this branch
- Open a PR from this branch to `main`
- Tag `christinecha` as a reviewer

### Running this app locally

```sh
git checkout main
yarn install // I had to run this: npm install -g yarn
yarn run dev
```

### Before committing

`// TODO: Make this a proper commit hook`

Run `yarn run check-clubs`. Clubs should have all of their required fields before you commit.



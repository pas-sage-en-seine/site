# Pas Sage En Seine website

For this new edition, PSES uses [Middleman](https://middlemanapp.com/) static site generator!

## How to use it

### Install bundles

```bash
bin/bundle install
```

You may have to update some bundles:

```bash
bin/bundle update
```

Bundler don't remove automatically previous bundle installed, if you want to clean your bundle directory, check the bundle versions to remove:

```bash
bin/bundle clean --dry-run
```

If you really want to remove those bundles:

```bash
bin/bundle clean --force
```

### Compile

```bash
bin/middleman
```

## Repositories

  * bin/: contains binaries to install bundles and launch Middleman application
  * data/: contains data files used for add or remove easily some informations, like partners
  * source/: contains website source files (HTML, CSS, JavaScript, images…)

# Build files

> ℹ️ This feature is available starting from Wocker v1.1.8.

A project can override files from its preset, and the project's data directory can in turn override files from the project.

This applies to projects that use a preset in the **For project only** mode (`presetMode: project`), which you choose when the preset is set up for the project.

## Layers

The image is built from three layers merged into one build context, in increasing priority (the last one is the highest):

1. the preset directory;
2. the project directory;
3. the project's data directory `<wocker-data-dir>/projects/<project-name>` (by default `~/.workspace/projects/<project-name>`).

If the same file exists in several layers, the one from the higher-priority layer wins. Use this to override or add files (a `php.ini`, a config, a script) for a single project without touching the preset or the project repository.

```text
~/.workspace/projects/my-app/
├── config.json      # ignored, never added to the build context
└── php.ini          # available in the Dockerfile as `COPY php.ini ...`
```

## Notes

- The project's `config.json` is always excluded from the build context.
- A `.dockerignore` in a layer applies to that layer only.
- The image is named `project-<project-name>:develop`.
- With the **Global usage** mode, only the preset directory is used.
- To rebuild the image after changing these files, run `ws start --build`.
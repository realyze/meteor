Package.describe({
  summary: "Moved to the 'mongo' package",
  version: '1.0.8-eachin.0'
});

Package.onUse(function (api) {
  api.imply("mongo");
});

group "default" {
  targets = ["validate-build"]
}

target "build" {
  context = "."
  dockerfile = "Dockerfile"
  tags = ["brandoo09/docker-github-actions:validacion"]
}

target "validate-build" {
  inherits = ["build"]
  call = "check"
}
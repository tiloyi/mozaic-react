@Library(['common-utils','microservice-pipelines']) _

// env.NODEJS_IMAGE="docker.art.lmru.tech/node:x.y.z"
env.NPM_LOCAL_REGISTRY="https://art.lmru.tech/api/npm/npm-local-wms"

env.USE_HELM_FROM="custom"  // custom or pipeline available
env.DEFAULT_CLUSTER_NAME="supchain"
PackageNpmPipeline()
ServicePipeline_v1(language: 'nodejs')


@Library(['common-utils','microservice-pipelines']) _

env.NPM_LOCAL_REGISTRY="https://art.lmru.tech/api/npm/npm-local-wms"

env.USE_HELM_FROM="custom"  // custom or pipeline available
env.DEFAULT_CLUSTER_NAME="supchain"

ServicePipeline_v1(language: 'nodejs')
env.NODEJS_IMAGE="docker.art.lmru.tech/node:14.17.4-alpine3.12"
PackageNpmPipeline()

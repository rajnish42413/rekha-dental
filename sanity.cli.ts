/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { NEXT_PUBLIC_SANITY_DATASET, NEXT_PUBLIC_SANITY_PROJECT_ID } from '@/utils/endpoints'
import { defineCliConfig } from 'sanity/cli'

const projectId = NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({ api: { projectId, dataset } })

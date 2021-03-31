import express, { Express } from 'express'
import dotenv from 'dotenv'

import { startupDB } from './startup/database'
import { startupLogging } from './startup/logging'
import { startupSettings } from './startup/settings'
import { startupRoutes } from './startup/routes'

// Startup logging
startupLogging()

// Config dotenv
dotenv.config()

// Startup setting
startupSettings()

// Connect to database
startupDB()

//Startup routes
const app: Express = express()
startupRoutes(app)

const PORT: string | number = process.env.PORT || 4000
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))

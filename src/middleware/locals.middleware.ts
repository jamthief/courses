import { Express } from 'express'
import { STATUS_DRAFT } from '../domain/model/course'
import {
    LESSON_TYPE_VIDEO,
    LESSON_TYPE_TEXT,
    LESSON_TYPE_QUIZ,
    LESSON_TYPE_ACTIVITY,
    LESSON_TYPE_CHALLENGE,
} from '../domain/model/lesson'
const { GOOGLE_ANALYTICS_MEASUREMENT_ID, TWITTER_TAG_ID } = process.env
import { getSvgs } from '../utils'


export function registerLocals(app: Express) {
    app.use((req, res, next) => {
        // Load constants into locals
        res.locals.statuses = {
            STATUS_DRAFT,
        }
        res.locals.lessonType = {
            LESSON_TYPE_VIDEO,
            LESSON_TYPE_TEXT,
            LESSON_TYPE_QUIZ,
            LESSON_TYPE_ACTIVITY,
            LESSON_TYPE_CHALLENGE,
        }

        // GA
        res.locals.ga = {
            id: GOOGLE_ANALYTICS_MEASUREMENT_ID,
        }

        res.locals.twitter = {
            tagId: TWITTER_TAG_ID,
        }

        res.locals.path = req.path

        res.locals.baseUrl = process.env.BASE_URL

        // Load CSVs from resources/svg
        res.locals.svg = getSvgs()

        next()
    })
}
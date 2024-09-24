export class ApiError extends Error {
	public readonly statusCode: number
  public readonly details: any

	constructor(message: string, statusCode: number, details: any) {
		super(message)
		this.statusCode = statusCode
    this.details = details
	}
}

export class BadRequestError extends ApiError {
	constructor(message: string, details?: any) {
		super(message, 400, details)
	}
}

export class NotFoundError extends ApiError {
	constructor(message: string, details?: any) {
		super(message, 404, details)
	}
}

export class UnauthorizedError extends ApiError {
	constructor(message: string, details?: any) {
		super(message, 401, details)
	}
}
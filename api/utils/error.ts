interface CustomErrorInterface {
  statusCode: number;
  message: string;
}

export const errorHandle = (
  statusCode: number,
  message: string
): CustomErrorInterface => {
  const error: CustomErrorInterface = {
    statusCode: statusCode,
    message: message,
  };
  return error;
};

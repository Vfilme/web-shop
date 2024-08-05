export enum EStatusLoading {
    idle = 'idle',
    loading = 'loading',
    success = 'success',
    failed = 'failed',
}

export type TStatusLoading =
    | EStatusLoading.idle
    | EStatusLoading.loading
    | EStatusLoading.success
    | EStatusLoading.failed;

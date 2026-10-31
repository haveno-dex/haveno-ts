/// Error type mirroring haveno-ts HavenoError.

class HavenoError implements Exception {
  final String message;

  HavenoError(this.message);

  @override
  String toString() => 'HavenoError: $message';
}

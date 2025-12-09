// Simple toast hook for notifications
export const useToast = () => {
  const toast = ({ title, description, variant }) => {
    const message = description || title;
    if (variant === 'destructive') {
      alert('❌ ' + message);
    } else {
      alert('✅ ' + message);
    }
  };

  return { toast };
};

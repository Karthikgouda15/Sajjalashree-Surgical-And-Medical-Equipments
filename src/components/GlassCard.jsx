import { motion } from 'framer-motion';
import { cn } from '../utils/cn'; // I'll create this utility later

const GlassCard = ({ children, className, delay = 0, hover = true, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={cn(
        "glass-effect p-6 rounded-3xl transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;

<?php

namespace App\Repository;

use App\Entity\VoitureController;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method VoitureController|null find($id, $lockMode = null, $lockVersion = null)
 * @method VoitureController|null findOneBy(array $criteria, array $orderBy = null)
 * @method VoitureController[]    findAll()
 * @method VoitureController[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VoitureControllerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, VoitureController::class);
    }

    // /**
    //  * @return VoitureController[] Returns an array of VoitureController objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('v.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?VoitureController
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
